export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string | null
          description: string | null
          price: number
          images: string[]
          sku: string | null
          pack_size: string | null
          availability: 'in-stock' | 'out-of-stock' | 'pre-order'
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          excerpt?: string | null
          description?: string | null
          price: number
          images?: string[]
          sku?: string | null
          pack_size?: string | null
          availability?: 'in-stock' | 'out-of-stock' | 'pre-order'
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          excerpt?: string | null
          description?: string | null
          price?: number
          images?: string[]
          sku?: string | null
          pack_size?: string | null
          availability?: 'in-stock' | 'out-of-stock' | 'pre-order'
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Product = Database['public']['Tables']['products']['Row']
export type NewProduct = Database['public']['Tables']['products']['Insert']
export type ProductUpdate = Database['public']['Tables']['products']['Update']