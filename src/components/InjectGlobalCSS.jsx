import { useEffect } from "react";

const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:'Montserrat',sans-serif;
  background:#0b1a0e;
  color:#e8f0e9;
  overflow-x:hidden;
}

a{
  text-decoration:none;
  color:inherit;
}

img{
  max-width:100%;
  display:block;
}

input,
select,
textarea{
  font-family:'Montserrat',sans-serif;
}

::-webkit-scrollbar{
  width:5px;
}

::-webkit-scrollbar-track{
  background:#0b1a0e;
}

::-webkit-scrollbar-thumb{
  background:#2d6a4f;
  border-radius:3px;
}

@keyframes fadeUp{
  from{
    opacity:0;
    transform:translateY(28px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes scrollLine{
  0%,100%{
    opacity:.3;
  }
  50%{
    opacity:1;
  }
}

@keyframes pulse{
  0%,100%{
    transform:scale(1);
  }
  50%{
    transform:scale(1.04);
  }
}

.fade-up{
  animation:fadeUp .7s ease both;
}

.fade-up-d1{
  animation:fadeUp .7s .15s ease both;
}

.fade-up-d2{
  animation:fadeUp .7s .3s ease both;
}

.fade-up-d3{
  animation:fadeUp .7s .45s ease both;
}
`;

export default function InjectGlobalCSS() {
  useEffect(() => {

    if (document.getElementById("ai-global")) return;

    const style = document.createElement("style");

    style.id = "ai-global";
    style.textContent = globalCSS;

    document.head.appendChild(style);

  }, []);

  return null;
}