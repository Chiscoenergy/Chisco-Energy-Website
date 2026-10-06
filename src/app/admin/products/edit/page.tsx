'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ProductForm = {
  slug: string;
  title: string;
  company: string;
  price: string;
  packSize: string;
  sku: string;
  availability: 'in-stock' | 'out-of-stock' | 'pre-order';
  tags: string;
};

const inputClass = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-chisco-petrol';

export default function EditProductPage() {
  const router = useRouter();
  const [productId, setProductId] = useState('');
  const [form, setForm] = useState<ProductForm>({
    slug: '', title: '', company: '', price: '', packSize: '', sku: '',
    availability: 'in-stock', tags: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadProduct() {
      const id = new URLSearchParams(window.location.search).get('id');
      if (!id) {
        setError('No product was selected. Return to the product list and try again.');
        setIsLoading(false);
        return;
      }
      setProductId(id);

      try {
        const authResponse = await fetch('/api/admin/auth/check');
        if (!authResponse.ok) {
          router.replace('/admin');
          return;
        }

        const response = await fetch(`/api/admin/products/item?id=${encodeURIComponent(id)}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Could not load this product.');

        if (!cancelled) {
          const product = data.product;
          setForm({
            slug: product.slug || '',
            title: product.title || '',
            company: product.company || '',
            price: product.price == null ? '' : String(product.price),
            packSize: product.packSize || '',
            sku: product.sku || '',
            availability: product.availability || 'in-stock',
            tags: Array.isArray(product.tags) ? product.tags.join(', ') : '',
          });
        }
      } catch (loadError) {
        if (!cancelled) setError(loadError instanceof Error ? loadError.message : 'Could not load this product.');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void loadProduct();
    return () => { cancelled = true; };
  }, [router]);

  function updateField<K extends keyof ProductForm>(field: K, value: ProductForm[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setError('');

    const parsedPrice = form.price.trim() ? Number(form.price) : null;
    if (parsedPrice !== null && (!Number.isFinite(parsedPrice) || parsedPrice < 0)) {
      setError('Enter a valid price of zero or more.');
      setIsSaving(false);
      return;
    }

    try {
      const response = await fetch(`/api/admin/products/item?id=${encodeURIComponent(productId)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: form.slug,
          title: form.title,
          company: form.company,
          price: parsedPrice,
          packSize: form.packSize,
          sku: form.sku,
          availability: form.availability,
          tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not save this product.');
      router.push('/admin/products');
      router.refresh();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : 'Could not save this product.');
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) return <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-600">Loading product…</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-4 sm:px-6">
          <Link href="/admin/products" className="mr-4 text-sm font-medium text-chisco-navy hover:text-chisco-petrol">← Back to Products</Link>
          <h1 className="text-xl font-heading font-semibold text-chisco-ink">Edit Product</h1>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow">
          {error && <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">Product title</label>
            <input id="title" required value={form.title} onChange={(event) => updateField('title', event.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="slug" className="mb-2 block text-sm font-medium text-gray-700">Product URL slug</label>
            <input id="slug" required value={form.slug} onChange={(event) => updateField('slug', event.target.value)} className={inputClass} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">Company / category</label>
              <input id="company" value={form.company} onChange={(event) => updateField('company', event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="sku" className="mb-2 block text-sm font-medium text-gray-700">SKU</label>
              <input id="sku" value={form.sku} onChange={(event) => updateField('sku', event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-700">Price (optional)</label>
              <input id="price" type="number" min="0" step="0.01" value={form.price} onChange={(event) => updateField('price', event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="packSize" className="mb-2 block text-sm font-medium text-gray-700">Pack size</label>
              <input id="packSize" value={form.packSize} onChange={(event) => updateField('packSize', event.target.value)} className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="availability" className="mb-2 block text-sm font-medium text-gray-700">Availability</label>
            <select id="availability" value={form.availability} onChange={(event) => updateField('availability', event.target.value as ProductForm['availability'])} className={inputClass}>
              <option value="in-stock">In stock</option>
              <option value="out-of-stock">Out of stock</option>
              <option value="pre-order">Pre-order</option>
            </select>
          </div>
          <div>
            <label htmlFor="tags" className="mb-2 block text-sm font-medium text-gray-700">Tags (comma separated)</label>
            <input id="tags" value={form.tags} onChange={(event) => updateField('tags', event.target.value)} className={inputClass} />
          </div>
          <div className="flex justify-end gap-3">
            <Link href="/admin/products" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</Link>
            <button type="submit" disabled={isSaving || !productId} className="rounded-lg bg-chisco-amber px-5 py-2 text-sm font-semibold text-chisco-black hover:bg-chisco-amber/90 disabled:cursor-not-allowed disabled:opacity-50">
              {isSaving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
