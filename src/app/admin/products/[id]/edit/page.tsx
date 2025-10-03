'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductForm {
  title: string;
  packSize: string;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  tags: string;
  images: File[];
}

interface ImagePreview {
  file: File;
  url: string;
}

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const [formData, setFormData] = useState<ProductForm>({
    title: '',
    packSize: '',
    availability: 'in-stock',
    tags: '',
    images: [],
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated && productId) {
      loadProduct();
    }
  }, [isAuthenticated, productId]);

  // Cleanup image preview URLs when component unmounts
  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => {
        URL.revokeObjectURL(preview.url);
      });
    };
  }, [imagePreviews]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/auth/check');
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        router.push('/admin');
      }
    } catch {
      router.push('/admin');
    } finally {
      setIsLoading(false);
    }
  };

  const loadProduct = async () => {
    try {
      console.log('Loading product with ID:', productId);
      const encodedProductId = encodeURIComponent(productId);
      console.log('Encoded product ID:', encodedProductId);
      const response = await fetch(`/api/admin/products/${encodedProductId}`);
      console.log('API Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Product data received:', data);
        setProduct(data.product);
        setFormData({
          title: data.product.title || '',
          packSize: data.product.packSize || '',
          availability: data.product.availability || 'in-stock',
          tags: data.product.tags ? data.product.tags.join(', ') : '',
          images: [],
        });
      } else {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        alert(`Failed to load product: ${errorText}`);
        router.push('/admin/products');
      }
    } catch (error) {
      console.error('Error loading product:', error);
      alert('Error loading product');
      router.push('/admin/products');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        images: files
      }));

      // Create preview URLs for selected images
      const previews: ImagePreview[] = files.map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setImagePreviews(previews);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('packSize', formData.packSize);
      formDataToSend.append('availability', formData.availability);
      formDataToSend.append('tags', formData.tags);

      // Only append images if new ones are selected
      if (formData.images.length > 0) {
        formData.images.forEach((image) => {
          formDataToSend.append('images', image);
        });
      }

      const response = await fetch(`/api/admin/products/${encodeURIComponent(productId)}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Product updated successfully!');
        // Force page refresh to clear any cached images
        window.location.href = '/admin/products';
      } else {
        const error = await response.text();
        alert(`Error updating product: ${error}`);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chisco-amber mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold text-chisco-ink mb-4">
            Product Not Found
          </h1>
          <Link
            href="/admin/products"
            className="bg-chisco-amber text-chisco-black px-4 py-2 rounded-lg hover:bg-chisco-amber/90 transition-colors text-sm font-medium"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/products"
                className="text-chisco-navy hover:text-chisco-petrol text-sm font-medium"
              >
                ← Back to Products
              </Link>
              <h1 className="text-xl font-heading font-semibold text-chisco-ink">
                Edit Product
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-heading font-semibold text-chisco-ink mb-6">
            Edit: {product.title}
          </h2>

          {/* Current Images */}
          {product.images && product.images.length > 0 && imagePreviews.length === 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Current Images</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.images.map((image: string, index: number) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-32 object-cover rounded border"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                New Images Preview (will replace current images)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview.url}
                      alt={`New image ${index + 1}`}
                      className="w-full h-32 object-cover rounded border"
                    />
                    <div className="absolute top-1 right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded">
                      New
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-2">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-chisco-petrol focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            <div>
              <label htmlFor="packSize" className="block text-sm font-medium text-gray-900 mb-2">
                Pack Size
              </label>
              <input
                type="text"
                id="packSize"
                name="packSize"
                value={formData.packSize}
                onChange={handleInputChange}
                placeholder="e.g., 20L, 210L"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-chisco-petrol focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-900 mb-2">
                Availability
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-chisco-petrol focus:border-transparent text-gray-900"
              >
                <option value="in-stock">In Stock</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="pre-order">Pre-order</option>
              </select>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-900 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="e.g., diesel, fuel, automotive"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-chisco-petrol focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>

            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-900 mb-2">
                Update Images (optional)
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-chisco-petrol focus:border-transparent text-gray-900"
              />
              <p className="text-sm text-gray-500 mt-1">
                Leave empty to keep current images. Select new images to replace all existing ones.
              </p>
              {imagePreviews.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setImagePreviews([]);
                    setFormData(prev => ({ ...prev, images: [] }));
                    // Reset the file input
                    const fileInput = document.getElementById('images') as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }}
                  className="mt-2 px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
                >
                  Clear Selected Images
                </button>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <Link
                href="/admin/products"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-2 bg-chisco-amber text-chisco-black font-semibold rounded-lg hover:bg-chisco-amber/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Updating...' : 'Update Product'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}