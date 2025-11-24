// HS-ADD: app/invite/page.tsx
export default function Page() {
  return (
    <div className="standalone invite-page">
      <h1 style={{ 
        fontSize: "24px", 
        fontWeight: "bold", 
        color: "#000", 
        margin: "20px 0 10px 0",
        textAlign: "center"
      }}>
        Invite your Friends to join HelloSpace!
      </h1>
      
      <p style={{ 
        fontSize: "14px", 
        color: "#000", 
        margin: "0 0 20px 0",
        textAlign: "center"
      }}>
        HelloSpace is more fun together — invite your friends!
      </p>

      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto", 
        padding: "0 20px"
      }}>
        <textarea
          style={{
            width: "100%",
            height: "80px",
            border: "1px solid #000",
            padding: "10px",
            fontSize: "14px",
            fontFamily: "inherit",
            resize: "vertical",
            marginBottom: "20px",
            boxSizing: "border-box"
          }}
          defaultValue="Join HelloSpace - the retro Social Network! hellospace.com"
        />

        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ 
            fontSize: "16px", 
            fontWeight: "bold", 
            color: "#000", 
            margin: "0 0 10px 0" 
          }}>
            Share on:
          </h3>
          <div style={{ 
            display: "flex", 
            gap: "10px", 
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            {/* Twitter (old) */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1DA1F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>T</a>
            
            {/* Facebook */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1877F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>f</a>
            
            {/* WhatsApp */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#25D366", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>W</a>
            
            {/* MySpace */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#000", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>M</a>
            
            {/* AOL Mail */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#FFA500", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>A</a>
            
            {/* Pinterest */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#BD081C", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>P</a>
            
            {/* Twitter (new) */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1DA1F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>X</a>
            
            {/* Reddit */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#FF4500", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>R</a>
            
            {/* LinkedIn */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#0077B5", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>in</a>
            
            {/* Tumblr */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#001935", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>T</a>
            
            {/* Email */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#666", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>@</a>
            
            {/* Copy Link */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#999", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>📋</a>
          </div>
        </div>

        <div>
          <h3 style={{ 
            fontSize: "16px", 
            fontWeight: "bold", 
            color: "#000", 
            margin: "0 0 10px 0" 
          }}>
            Follow HelloSpace on:
          </h3>
          <div style={{ 
            display: "flex", 
            gap: "10px", 
            flexWrap: "wrap",
            alignItems: "center"
          }}>
            {/* Twitter (old) */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1DA1F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>T</a>
            
            {/* Instagram */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#E4405F", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>IG</a>
            
            {/* MySpace */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#000", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>M</a>
            
            {/* AOL Mail */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#FFA500", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>A</a>
            
            {/* YouTube */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#FF0000", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>YT</a>
            
            {/* TikTok */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#000", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>TT</a>
            
            {/* Facebook */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1877F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>f</a>
            
            {/* Twitter (new) */}
            <a href="#" style={{ 
              display: "inline-block", 
              width: "32px", 
              height: "32px", 
              background: "#1DA1F2", 
              borderRadius: "4px",
              textDecoration: "none",
              color: "#fff",
              textAlign: "center",
              lineHeight: "32px",
              fontSize: "12px"
            }}>X</a>
          </div>
        </div>
      </div>
    </div>
  );
}

