
-- Create a table for client reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  project_type TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert reviews (for public submission)
CREATE POLICY "Anyone can submit reviews" 
  ON public.reviews 
  FOR INSERT 
  WITH CHECK (true);

-- Policy to allow anyone to view approved reviews
CREATE POLICY "Anyone can view approved reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (is_approved = true);

-- Policy to allow admin to view all reviews
CREATE POLICY "Admin can view all reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (true);

-- Policy to allow admin to update reviews (approve/reject)
CREATE POLICY "Admin can update reviews" 
  ON public.reviews 
  FOR UPDATE 
  USING (true);

-- Create an index for better performance
CREATE INDEX idx_reviews_approved ON public.reviews(is_approved);
CREATE INDEX idx_reviews_created_at ON public.reviews(created_at DESC);
