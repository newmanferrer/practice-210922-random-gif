import { rest } from 'msw';

const catFactURL = 'https://catfact.ninja/fact';
//* ---------------------------------------------
const giphyURL = 'PUT THE URL WITH THE API KEY HERE';
//* ---------------------------------------------

export const handlers = [
  rest.get(catFactURL, (_req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        fact: 'Purring does not always indicate that a cat is happy and healthy - some cats will purr loudly when they are terrified or in pain.',
        length: 129
      })
    );
  }),

  rest.get(giphyURL, (req, res, ctx) => {
    const api_key = req.url.searchParams.get('api_key');
    const limit = req.url.searchParams.get('limit');
    const offset = req.url.searchParams.get('offset');
    const rating = req.url.searchParams.get('rating');
    const lang = req.url.searchParams.get('lang');
    const allParams = req.url.searchParams.getAll('search');

    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json({
        data: [
          {
            type: 'gif',
            id: 'cfuL5gqFDreXxkWQ4o',
            url: 'https://giphy.com/gifs/cat-cool-cats-cfuL5gqFDreXxkWQ4o',
            slug: 'cat-cool-cats-cfuL5gqFDreXxkWQ4o',
            bitly_gif_url: 'http://gph.is/2I5xics',
            bitly_url: 'http://gph.is/2I5xics',
            embed_url: 'https://giphy.com/embed/cfuL5gqFDreXxkWQ4o',
            username: 'Bubblepunk',
            source: '',
            title: 'On My Way Goodbye GIF by Bubble Punk',
            rating: 'g',
            content_url: '',
            source_tld: '',
            source_post_url: '',
            is_sticker: 0,
            import_datetime: '2018-03-04 20:50:43',
            trending_datetime: '1970-01-01 00:00:00',
            images: {
              original: {
                height: '480',
                width: '480',
                size: '7275085',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy.gif&ct=g',
                mp4_size: '1155002',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy.mp4&ct=g',
                webp_size: '1778974',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy.webp&ct=g',
                frames: '80',
                hash: '31c2b38470e75fa7c207363e9a4f2ee3'
              },
              downsized: {
                height: '294',
                width: '294',
                size: '1492284',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-downsized.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-downsized.gif&ct=g'
              },
              downsized_large: {
                height: '480',
                width: '480',
                size: '7275085',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy.gif&ct=g'
              },
              downsized_medium: {
                height: '480',
                width: '480',
                size: '4802533',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-downsized-medium.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-downsized-medium.gif&ct=g'
              },
              downsized_small: {
                height: '158',
                width: '158',
                mp4_size: '178112',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-downsized-small.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-downsized-small.mp4&ct=g'
              },
              downsized_still: {
                height: '294',
                width: '294',
                size: '31363',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-downsized_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-downsized_s.gif&ct=g'
              },
              fixed_height: {
                height: '200',
                width: '200',
                size: '1247612',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200.gif&ct=g',
                mp4_size: '411792',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200.mp4&ct=g',
                webp_size: '640386',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200.webp&ct=g'
              },
              fixed_height_downsampled: {
                height: '200',
                width: '200',
                size: '108184',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200_d.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200_d.gif&ct=g',
                webp_size: '64578',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200_d.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200_d.webp&ct=g'
              },
              fixed_height_small: {
                height: '100',
                width: '100',
                size: '426703',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100.gif&ct=g',
                mp4_size: '162803',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100.mp4&ct=g',
                webp_size: '247568',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100.webp&ct=g'
              },
              fixed_height_small_still: {
                height: '100',
                width: '100',
                size: '6536',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100_s.gif&ct=g'
              },
              fixed_height_still: {
                height: '200',
                width: '200',
                size: '17486',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200_s.gif&ct=g'
              },
              fixed_width: {
                height: '200',
                width: '200',
                size: '1247612',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w.gif&ct=g',
                mp4_size: '411792',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w.mp4&ct=g',
                webp_size: '640386',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w.webp&ct=g'
              },
              fixed_width_downsampled: {
                height: '200',
                width: '200',
                size: '108184',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w_d.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w_d.gif&ct=g',
                webp_size: '64578',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w_d.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w_d.webp&ct=g'
              },
              fixed_width_small: {
                height: '100',
                width: '100',
                size: '426703',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100w.gif&ct=g',
                mp4_size: '47553',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100w.mp4&ct=g',
                webp_size: '247568',
                webp: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100w.webp&ct=g'
              },
              fixed_width_small_still: {
                height: '100',
                width: '100',
                size: '6536',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/100w_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=100w_s.gif&ct=g'
              },
              fixed_width_still: {
                height: '200',
                width: '200',
                size: '17486',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=200w_s.gif&ct=g'
              },
              looping: {
                mp4_size: '3067896',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-loop.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-loop.mp4&ct=g'
              },
              original_still: {
                height: '480',
                width: '480',
                size: '100268',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy_s.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy_s.gif&ct=g'
              },
              original_mp4: {
                height: '480',
                width: '480',
                mp4_size: '1155002',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy.mp4&ct=g'
              },
              preview: {
                height: '214',
                width: '214',
                mp4_size: '42724',
                mp4: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-preview.mp4?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-preview.mp4&ct=g'
              },
              preview_gif: {
                height: '100',
                width: '100',
                size: '48287',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-preview.gif?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-preview.gif&ct=g'
              },
              preview_webp: {
                height: '138',
                width: '138',
                size: '49216',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-preview.webp?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=giphy-preview.webp&ct=g'
              },
              '480w_still': {
                height: '480',
                width: '480',
                size: '7275085',
                url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/480w_s.jpg?cid=b35118dejlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj&rid=480w_s.jpg&ct=g'
              }
            },
            user: {
              avatar_url: 'https://media0.giphy.com/avatars/Bubblepunk/E55XZI4qQ6I8.gif',
              banner_image: 'https://media0.giphy.com/headers/Bubblepunk/F0nyfsiuGrZN.gif',
              banner_url: 'https://media0.giphy.com/headers/Bubblepunk/F0nyfsiuGrZN.gif',
              profile_url: 'https://giphy.com/Bubblepunk/',
              username: 'Bubblepunk',
              display_name: 'Bubble Punk',
              description: "Sweet 'n sour eye candy.",
              instagram_url: 'https://instagram.com/bubblepunk',
              website_url: 'http://www.instagram.com/bubblepunk/',
              is_verified: true
            },
            analytics_response_payload:
              'e=Z2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWIzNTExOGRlamxtYnM5c3lwaGhhcndjN2wzYWhsdXVqamVkMGI1cDZmdXhxcGpqaiZjdD1n',
            analytics: {
              onload: {
                url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWIzNTExOGRlamxtYnM5c3lwaGhhcndjN2wzYWhsdXVqamVkMGI1cDZmdXhxcGpqaiZjdD1n&action_type=SEEN'
              },
              onclick: {
                url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWIzNTExOGRlamxtYnM5c3lwaGhhcndjN2wzYWhsdXVqamVkMGI1cDZmdXhxcGpqaiZjdD1n&action_type=CLICK'
              },
              onsent: {
                url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWNmdUw1Z3FGRHJlWHhrV1E0byZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWIzNTExOGRlamxtYnM5c3lwaGhhcndjN2wzYWhsdXVqamVkMGI1cDZmdXhxcGpqaiZjdD1n&action_type=SENT'
              }
            }
          }
        ],
        pagination: {
          total_count: 9085,
          count: 1,
          offset: 0
        },
        meta: {
          status: 200,
          msg: 'OK',
          response_id: 'jlmbs9syphharwc7l3ahluujjed0b5p6fuxqpjjj'
        }
      }),
      ctx.json({
        api_key,
        limit,
        offset,
        rating,
        lang,
        allParams
      })
    );
  })
];
