# Supabase Storage Setup for Product Images

## 1. Create Storage Bucket

In your Supabase dashboard:

1. Go to **Storage** section
2. Click **New bucket**
3. Name: `product-images`
4. Set as **Public bucket** (checked)
5. Click **Create bucket**

## 2. Set Storage Policies

Run this SQL in your Supabase SQL Editor:

```sql
-- Allow public access to view images
CREATE POLICY "Public read access for product images" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

-- Allow authenticated users to upload images (admin)
CREATE POLICY "Admin can upload product images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'product-images' 
    AND auth.role() = 'authenticated'
  );

-- Allow authenticated users to update images (admin)
CREATE POLICY "Admin can update product images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'product-images' 
    AND auth.role() = 'authenticated'
  );

-- Allow authenticated users to delete images (admin)
CREATE POLICY "Admin can delete product images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'product-images' 
    AND auth.role() = 'authenticated'
  );
```

## 3. File Upload Configuration

- **Max file size**: 5MB per image
- **Allowed types**: jpg, jpeg, png, webp
- **Folder structure**: `/products/{product-id}/image-name.jpg`

## 4. Image URL Format

Public image URLs will be:
```
https://your-project-ref.supabase.co/storage/v1/object/public/product-images/products/{product-id}/image-name.jpg
```