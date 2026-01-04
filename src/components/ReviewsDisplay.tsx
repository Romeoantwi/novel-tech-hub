
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  client_name: string;
  rating: number;
  review_text: string;
  project_type: string | null;
  created_at: string;
}

const ReviewsDisplay = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews' as any)
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        return;
      }

      setReviews((data as unknown as Review[]) || []);
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="text-center text-gray-300">
        Loading reviews...
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center text-gray-300">
        No reviews yet. Be the first to leave a review!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <Card key={review.id} className="bg-slate-900/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold">{review.client_name}</h3>
                {review.project_type && (
                  <p className="text-sm text-gray-400 capitalize">
                    {review.project_type.replace('-', ' ')}
                  </p>
                )}
              </div>
              {renderStars(review.rating)}
            </div>
            
            <p className="text-gray-300 mb-4 line-clamp-4">
              "{review.review_text}"
            </p>
            
            <p className="text-sm text-gray-500">
              {formatDate(review.created_at)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReviewsDisplay;
