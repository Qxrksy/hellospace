// HS-ADD: app/layouts/page.tsx
import Link from "next/link";
import Image from "next/image";
import styles from './layouts.module.css';

export default function LayoutsPage() {
  // TODO: Replace with actual authentication check
  const isAuthenticated = false; // This will be replaced with real auth later

  return (
    <div className={`row ${styles['blog-category']}`}>
      <div className={`col ${styles['w-20']} left`}>
        <div className={styles['category-list']}>
          <b>View:</b>
          <ul>
            <li>
              <img src="/static/icons/award_star_add.png" alt="star" style={{width: '12px', height: '12px', marginRight: '5px'}} />
              <Link href="#" className="filter-active">Popular Layouts</Link>
            </li>
            <li>
              <img src="/static/icons/clock.png" alt="clock" style={{width: '12px', height: '12px', marginRight: '5px'}} />
              <Link href="#">Recent Layouts</Link>
            </li>
            <li>
              <img src="/static/icons2/heart.png" alt="heart" style={{width: '12px', height: '12px', marginRight: '5px'}} />
              <Link href="#">Favorite Layouts</Link>
            </li>
          </ul>
          
          <b>Popular Tags:</b>
          <ul>
            <li><Link href="#">music (6937)</Link></li>
            <li><Link href="#">autoplay (4641)</Link></li>
            <li><Link href="#">layout (2404)</Link></li>
            <li><Link href="#">gif (2199)</Link></li>
            <li><Link href="#">cute (2183)</Link></li>
            <li><Link href="#">simple (2178)</Link></li>
            <li><Link href="#">song (1900)</Link></li>
            <li><Link href="#">emo (1808)</Link></li>
            <li><Link href="#">black (1647)</Link></li>
            <li><Link href="#">pink (1603)</Link></li>
            <li><Link href="#">2000s (1233)</Link></li>
            <li><Link href="#">loop (1233)</Link></li>
            <li><Link href="#">scene (982)</Link></li>
            <li><Link href="#">red (947)</Link></li>
            <li><Link href="#">animation (915)</Link></li>
            <li><Link href="#">blue (903)</Link></li>
            <li><Link href="#">layouts (786)</Link></li>
            <li><Link href="#">white (703)</Link></li>
            <li><Link href="#">dark (648)</Link></li>
            <li><Link href="#">goth (602)</Link></li>
            <li><Link href="#">green (600)</Link></li>
            <li><Link href="#">peterkilledapony (571)</Link></li>
            <li><Link href="#">twilaslayoutshack (568)</Link></li>
            <li><Link href="#">purple (506)</Link></li>
            <li><Link href="#">90s (491)</Link></li>
          </ul>
        </div>
      </div>

      <div className={`col ${styles.right}`}>
        <h1>Layouts</h1>
        <p>Here you can discover SpaceHey Layouts (Designs), add them to your Profile and share your own creations!</p>
        
        {isAuthenticated && (
          <p>
            <a href="/new" style={{marginRight: '10px'}}>
              <button style={{
                background: '#34D399',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <img src="/static/icons/add.png" alt="add" className={styles.icon} style={{width: '16px', height: '16px'}} />
                Share a Layout
              </button>
            </a>
            <a href="/user">
              <button style={{
                background: '#1E40AF',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <img src="/static/icons/status_online.png" alt="person" className={styles.icon} style={{width: '16px', height: '16px'}} />
                My Layouts
              </button>
            </a>
          </p>
        )}

        <div className={styles['blog-preview']}>
          <h3>Popular Layouts</h3>
          <a href="https://rss.spacehey.com/layouts_top" className={styles['rss-right']} title="RSS Feed">
            <img src="/static/icons/feed.png" alt="RSS" style={{width: '16px', height: '16px'}} />
          </a>
          
          <div className="blog-entries">
            {/* Layout Entry 1 */}
            <div className="entry">
              <div style={{fontSize: '0.8em', color: '#666', marginBottom: '5px'}}>
                1 year ago — by Jack ↑ — 5886 Comments
              </div>
              <div style={{marginBottom: '10px'}}>
                <img 
                  src="https://via.placeholder.com/600x150/333/fff?text=Vinyl+Showcase+Library+-+Album+Covers+Row" 
                  alt="Vinyl Showcase Library Layout" 
                  style={{width: '100%', maxWidth: '600px', border: '1px solid #ddd'}}
                />
              </div>
              <div style={{marginBottom: '10px'}}>
                <strong>Vinyl Showcase Library - Shows the album and info above hover</strong>
              </div>
              <div style={{fontSize: '0.9em', lineHeight: '1.4', marginBottom: '10px'}}>
                Common Questions Change the covers and everything you'd want! Any image hosting site works The image hosting site i used in my own layout is Rate Your Music, search your desired album, click in the image and the site will give you a html code. To change the title color (if), change the #000000 to any other color code. ♪ Exemple In My Profile ♪
              </div>
              <div>
                <Link href="#" style={{color: '#1E40AF', fontWeight: 'bold'}}>» View Details</Link>
              </div>
            </div>

            {/* Layout Entry 2 */}
            <div className="entry">
              <div style={{fontSize: '0.8em', color: '#666', marginBottom: '5px'}}>
                4 years ago — by TheJasmineSixx (LunaGloomyCore) — 3825 Comments
              </div>
              <div style={{marginBottom: '10px'}}>
                <img 
                  src="https://via.placeholder.com/600x200/000/fff?text=Scenecore+Layout+with+Invader+Zim+Characters" 
                  alt="Scenecore Layout" 
                  style={{width: '100%', maxWidth: '600px', border: '1px solid #ddd'}}
                />
              </div>
              <div style={{marginBottom: '10px'}}>
                <strong>scenecore layout 2</strong>
              </div>
              <div style={{fontSize: '0.9em', lineHeight: '1.4', marginBottom: '10px'}}>
                feel free to change anything, if used please give me credit
              </div>
              <div>
                <Link href="#" style={{color: '#1E40AF', fontWeight: 'bold'}}>» View Details</Link>
              </div>
            </div>

            {/* Layout Entry 3 */}
            <div className="entry">
              <div style={{fontSize: '0.8em', color: '#666', marginBottom: '5px'}}>
                2 years ago — by fini hoover :3 — 17687 Comments
              </div>
              <div style={{marginBottom: '10px'}}>
                <img 
                  src="https://via.placeholder.com/600x150/ff0000/fff?text=Profile+Layout+with+Red+Triangle+Design" 
                  alt="Fini Hoover Layout" 
                  style={{width: '100%', maxWidth: '600px', border: '1px solid #ddd'}}
                />
              </div>
              <div style={{marginBottom: '10px'}}>
                <strong>fini hoover :3</strong>
              </div>
              <div style={{fontSize: '0.9em', lineHeight: '1.4', marginBottom: '10px'}}>
                she her i speak english and...
              </div>
              <div>
                <Link href="#" style={{color: '#1E40AF', fontWeight: 'bold'}}>» View Details</Link>
              </div>
            </div>
          </div>
          
          <div className={styles.pagination}>
            <a className="next" rel="next" href="/?page=2">
              <button>Next Page</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

