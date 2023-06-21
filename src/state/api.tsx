import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
export interface Video {
  type: string;
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  description: string;
  viewCount: string;
  publishedText: string;
  lengthText: string;
  thumbnail: Array<Thumbnail>;
  richThumbnail: Array<Thumbnail>;
  channelThumbnail: Array<Thumbnail>;
  videos: Array<VideoinList>;
  videoCount: string;
  subscriberCount: string;
}
export interface VideoinList {
  videoId: string;
  title: string;
  lengthText: string;
}
export interface VideoResponse {
  continuation: string;
  estimatedResults: string;
  msg: string;
  data: Array<Video>;
}

export interface ChannelResponse {
  continuation: string;
  meta: ChannelMeta;
  data: Array<Video>;
}
export interface ChannelMeta {
  title: string;
  description: string;
  thumbnail: Array<Thumbnail>;
  image: ChannelImage;
  subscriberCount: string;
}
export interface ChannelImage {
  banner: Array<Thumbnail>;
  tvBanner: Array<Thumbnail>;
  mobileBanner: Array<Thumbnail>;
}
export interface VideoDetailResponse {
  id: string;
  title: string;
  lengthSeconds: string;
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: Array<Thumbnail>;
  viewCount: string;
  publishDate: string;
}
const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
  "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
};
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "videos",
  tagTypes: ["Videos", "Channel", "VideoDetail", "RelatedVideo"],
  endpoints: (builder) => ({
    getSearch: builder.query<VideoResponse, string>({
      query: (searchParam) => ({
        url: "search",
        method: "GET",
        params: {
          query: `${searchParam}`,
          maxResults: "50",
        },
        headers: headers,
      }),
      providesTags: ["Videos"],
    }),
    getChannel: builder.query<ChannelResponse, string>({
      query: (channelId) => ({
        url: "channel",
        method: "GET",
        params: {
          id: `${channelId}`,
        },
        headers: headers,
      }),
      providesTags: ["Channel"],
    }),
    getVideoDetail: builder.query<VideoDetailResponse, string>({
      query: (videoId) => ({
        url: "video",
        method: "GET",
        params: {
          id: `${videoId}`,
        },
        headers: headers,
      }),
      providesTags: ["VideoDetail"],
    }),
    getRelatedVideo: builder.query<VideoResponse, string>({
      query: (videoId) => ({
        url: "related",
        method: "GET",
        params: {
          id: `${videoId}`,
          maxResults: "10",
        },
        headers: headers,
      }),
      providesTags: ["RelatedVideo"],
    }),
  }),
});
export const {
  useGetSearchQuery,
  useGetChannelQuery,
  useGetVideoDetailQuery,
  useGetRelatedVideoQuery,
} = api;
