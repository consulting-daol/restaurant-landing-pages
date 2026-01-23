import { useEffect, useRef } from 'react';

export const useInstagramFeed = () => {
  const instagramFeedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (instagramFeedRef.current) {
      showTemporaryImage();
    }
  }, []);

  const showTemporaryImage = () => {
    if (!instagramFeedRef.current) return;
    
    instagramFeedRef.current.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'instagram-temporary';
    container.innerHTML = `
      <a href="https://www.instagram.com/briochebyavitus.yyc/" 
         target="_blank" 
         rel="noopener noreferrer"
         className="instagram-temporary-link">
        <img 
          src="/images/brioche-instagram/temp_instagram.png" 
          alt="Brioche by Avitus Instagram Feed" 
          className="instagram-temporary-img"
        />
      </a>
    `;
    
    instagramFeedRef.current.appendChild(container);
  };

  const showFallback = () => {
    if (!instagramFeedRef.current) return;
    
    instagramFeedRef.current.innerHTML = '';
    
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'instagram-fallback';
    fallbackDiv.innerHTML = `
      <div class="instagram-fallback-content">
        <div class="instagram-icon">📸</div>
        <h3>Follow Us on Instagram</h3>
        <p>Check out our latest posts and stories!</p>
        <a href="https://www.instagram.com/briochebyavitus.yyc/" 
           target="_blank" 
           rel="noopener noreferrer"
           class="instagram-fallback-link">
          <span>@briochebyavitus.yyc</span>
          <span class="instagram-arrow">→</span>
        </a>
        <p class="instagram-note">Visit our Instagram to see all our latest posts!</p>
      </div>
    `;
    
    instagramFeedRef.current.appendChild(fallbackDiv);
  };

  const initializeFeed = () => {
    if (!instagramFeedRef.current) {
      showFallback();
      return;
    }

    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.NEXT_PUBLIC_INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      showFallback();
      return;
    }

    if (window.Instafeed) {
      try {
        const feed = new window.Instafeed({
          accessToken: accessToken,
          target: instagramFeedRef.current,
          get: 'user',
          userId: userId,
          limit: 6,
          resolution: 'standard_resolution',
          template: `
            <div class="instagram-item">
              <a href="{{link}}" target="_blank" rel="noopener noreferrer">
                <img src="{{image}}" alt="{{caption}}" loading="lazy" />
                <div class="instagram-overlay">
                  <p>{{caption}}</p>
                </div>
              </a>
            </div>
          `,
          error: (error) => {
            console.error('Instafeed error:', error);
            showFallback();
          },
        });
        feed.run();
      } catch (error) {
        console.error('Error initializing Instagram feed:', error);
        showFallback();
      }
    } else {
      showFallback();
    }
  };

  return { instagramFeedRef, showFallback, initializeFeed };
};
