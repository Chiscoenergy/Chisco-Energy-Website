import { db, storage } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export interface ProductData {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  description?: string;
  price?: number;
  packSize: string;
  sku?: string;
  availability: "in-stock" | "out-of-stock" | "pre-order";
  tags: string[];
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export class FirebaseProductService {
  private collectionName = "products";

  // Upload image to Firebase Storage
  async uploadImage(file: File, productId: string): Promise<string> {
    const storageRef = ref(storage, `products/${productId}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);
  }

  // Delete image from Firebase Storage
  async deleteImage(imageUrl: string): Promise<void> {
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);
  }

  // Create new product
  async createProduct(
    productData: Omit<ProductData, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      // Remove undefined fields to avoid Firestore errors
      const payload: any = { ...productData };
      Object.keys(payload).forEach((k) => {
        if (payload[k] === undefined) delete payload[k];
      });

      const docRef = await addDoc(collection(db, this.collectionName), {
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Failed to create product");
    }
  }

  // Get all products
  async getProducts(): Promise<ProductData[]> {
    try {
      const q = query(
        collection(db, this.collectionName),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductData[];
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }

  // Update product
  async updateProduct(
    productId: string,
    updates: Partial<ProductData>
  ): Promise<void> {
    try {
      // Remove undefined fields before updating
      const payload: any = { ...updates };
      Object.keys(payload).forEach((k) => {
        if (payload[k] === undefined) delete payload[k];
      });

      const productRef = doc(db, this.collectionName, productId);
      await updateDoc(productRef, {
        ...payload,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Failed to update product");
    }
  }

  // Delete product
  async deleteProduct(productId: string): Promise<void> {
    try {
      await deleteDoc(doc(db, this.collectionName, productId));
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Failed to delete product");
    }
  }
}

export const productService = new FirebaseProductService();
