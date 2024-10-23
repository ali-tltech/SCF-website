// components/Loading.js
const Loading = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="200" height="150">
          {/* Background */}
          <rect width="200" height="150" fill="white" />
  
          {/* Letter Boxes */}
          <g transform="translate(30, 30)">
            {/* S Box */}
            <rect x="0" y="0" width="35" height="40" fill="black">
              <animate 
                attributeName="height"
                values="0;40"
                dur="0.6s"
                begin="0s"
                fill="freeze"
              />
            </rect>
            <text x="17.5" y="30" font-size="20" font-weight="bold" fill="white" text-anchor="middle" opacity="0">
              S
              <animate 
                attributeName="opacity"
                values="0;1"
                dur="0.3s"
                begin="0.6s"
                fill="freeze"
              />
            </text>
  
            {/* C Box */}
            <rect x="45" y="0" width="35" height="40" fill="black">
              <animate 
                attributeName="height"
                values="0;40"
                dur="0.6s"
                begin="0.2s"
                fill="freeze"
              />
            </rect>
            <text x="62.5" y="30" font-size="20" font-weight="bold" fill="white" text-anchor="middle" opacity="0">
              C
              <animate 
                attributeName="opacity"
                values="0;1"
                dur="0.3s"
                begin="0.8s"
                fill="freeze"
              />
            </text>
  
            {/* F Box */}
            <rect x="90" y="0" width="35" height="40" fill="black">
              <animate 
                attributeName="height"
                values="0;40"
                dur="0.6s"
                begin="0.4s"
                fill="freeze"
              />
            </rect>
            <text x="107.5" y="30" font-size="20" font-weight="bold" fill="white" text-anchor="middle" opacity="0">
              F
              <animate 
                attributeName="opacity"
                values="0;1"
                dur="0.3s"
                begin="1s"
                fill="freeze"
              />
            </text>
          </g>
  
          {/* Strategies Text */}
          <text x="100" y="100" font-size="20" font-weight="bold" fill="black" text-anchor="middle" opacity="0">
            Strategies
            <animate 
              attributeName="opacity"
              values="0;1"
              dur="0.6s"
              begin="1.2s"
              fill="freeze"
            />
          </text>
        </svg>
      </div>
    );
  };
  
  export default Loading;
  