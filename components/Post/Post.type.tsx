import React from "react";

export type PostType = {
  likedPost?: boolean;
  closeDetailedView?: any;
  data: {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: string | null;
    width: number;
    height: number;
    color: string;
    blur_hash: string | null;
    description: string | null;
    alt_description?: string | null;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      small_s3: string;
    };
    links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: {}[];
    sponsorship: null;
    topic_submissions: {};
    user: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string | null;
      twitter_username: string | null;
      portfolio_url: string | null;
      bio: string | null;
      location: string | null;
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
      profile_image: {
        small: string;
        medium: string;
        large: string;
      };
      instagram_username: string | null;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string | null;
        portfolio_url: string | null;
        twitter_username: string | null;
        paypal_email: string | null;
      };
    };
  };
} & Omit<React.ComponentProps<"image">, "alt">;

export type LikedPostType = {
  id: number;
  urls: {
    thumb: "string";
  };
  user: {
    username: "string";
  };
};
