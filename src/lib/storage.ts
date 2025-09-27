import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export class StorageService {
  async uploadProductImage(
    productId: string,
    file: File,
    fileName?: string
  ): Promise<{ url: string | null; error: Error | null }> {
    try {
      const fileExt = file.name.split(".").pop();
      const finalFileName = fileName || `${Date.now()}.${fileExt}`;
      const filePath = `products/${productId}/${finalFileName}`;

      const storageRef = ref(storage, filePath);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      return { url, error: null };
    } catch (error) {
      console.error("Error uploading image:", error);
      return { url: null, error: error as Error };
    }
  }

  async deleteProductImage(imageUrl: string): Promise<{ error: Error | null }> {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      return { error: null };
    } catch (error) {
      console.error("Error deleting image:", error);
      return { error: error as Error };
    }
  }

  async getProductImageUrl(
    filePath: string
  ): Promise<{ url: string | null; error: Error | null }> {
    try {
      const imageRef = ref(storage, filePath);
      const url = await getDownloadURL(imageRef);
      return { url, error: null };
    } catch (error) {
      console.error("Error getting image URL:", error);
      return { url: null, error: error as Error };
    }
  }
}

export const storageService = new StorageService();
