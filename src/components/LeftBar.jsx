import { useEffect, useRef, useState } from "react";

function LeftBar() {
  const [type, setType] = useState("Full");

  let classNames = useRef({
    Full: "leftBarFull",
    Compact: "leftBarCompact",
    Floating: "leftBarFloating",
  });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 960) {
          setType("Compact");
        } else {
          setType("Full");
        }
      }
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  function renderLeftBar() {
    if (type === "Full") {
      return (
        <div className="leftBar">
          <button>
            <i></i>
            Overview
          </button>
          <button>
            <i></i>
            Blogs
          </button>
          <button>
            <i></i>E Commerence
          </button>
          <button>
            <i></i>
            Settings
          </button>
        </div>
      );
    }

    if (type === "Compact") {
      return (
        <div className="leftBarCompact ">
          <button onClick={() => setType("Floating")}>
            <i class="bsc-menu-hambuger"></i>
          </button>
        </div>
      );
    }

    if (type === "Floating") {
      return (
        <div
          className="leftBarFloating"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setType("Compact");
            }
          }}
        >
          <button>
            <i></i>
            Overview
          </button>
          <button>
            <i></i>
            Blogs
          </button>
          <button>
            <i></i>E Commerence
          </button>
          <button>
            <i></i>
            Settings
          </button>
        </div>
      );
    }
  }

  return renderLeftBar();
}

export default LeftBar;
