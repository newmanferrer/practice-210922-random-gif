export interface IGiphyApi {
  data: IData[];
  meta: IMeta;
  pagination: IPagination;
}

export interface IData {
  analytics: IAnalytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: IImages;
  import_datetime: Date;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: Date;
  type: string;
  url: string;
  user: IUser;
  username: string;
}

export interface IMeta {
  status: number;
  msg: string;
  response_id: string;
}

export interface IPagination {
  total_count: number;
  count: number;
  offset: number;
}

interface IAnalytics {
  onload: IOnclick;
  onclick: IOnclick;
  onsent: IOnclick;
}

interface IOnclick {
  url: string;
}

interface IImages {
  original: IOriginal;
  downsized: IDounsized;
  downsized_large: IDounsized;
  downsized_medium: IDounsized;
  downsized_small: IDownsizedSmall;
  downsized_still: IDounsized;
  fixed_height: IOriginal;
  fixed_height_downsampled: IOriginal;
  fixed_height_small: IOriginal;
  fixed_height_small_still: IDounsized;
  fixed_height_still: IDounsized;
  fixed_width: IOriginal;
  fixed_width_downsampled: IOriginal;
  fixed_width_small: IOriginal;
  fixed_width_small_still: IDounsized;
  fixed_width_still: IDounsized;
  looping: ILooping;
  original_still: IDounsized;
  original_mp4: IDownsizedSmall;
  preview: IDownsizedSmall;
  preview_gif: IDounsized;
  preview_webp: IDounsized;
  '480w_still': IDounsized;
}

interface IDounsized {
  height: string;
  width: string;
  size: string;
  url: string;
}

interface IDownsizedSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

interface IOriginal {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

interface ILooping {
  mp4: string;
  mp4_size: string;
}

interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}
