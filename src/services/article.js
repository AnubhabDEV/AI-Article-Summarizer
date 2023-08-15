import { createApi, fetchBaseQuery } from 
'@reduxjs/toolkit/query/react';



const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': 'a476115622msh28f2b84d6012291p1749e7jsn21f8deb1154e',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};




export const articleApi = createApi({
    reducerPath : 'articleApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key', 'a476115622msh28f2b84d6012291p1749e7jsn21f8deb1154e');
            headers.set('X-RapidAPI-Host', 
            'article-extractor-and-summarizer.p.rapidapi.com');


            return headers;
        }
    }),
    endpoints : (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;