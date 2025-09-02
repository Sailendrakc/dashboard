import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import boxedMenuIcon from "../assets/menu-boxed.svg";

function LeftBar() {
  const [type, setType] = useState("Full");
  const [activeButton, setActiveButton] = useState("Overview");

  let classNames = useRef({
    Full: "leftBarFull",
    Compact: "leftBarCompact",
    Floating: "leftBarFloating",
  });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width < 970) {
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

  const navigate = useNavigate();

  const buttonsHtml = (
    <>
      <button
        className={
          activeButton === "Overview"
            ? "leftBar-button-active"
            : "leftBar-button"
        }
        onClick={() => {
          navigate("/");
          setActiveButton("Overview");
        }}
      >
        <i></i>
        Overview
      </button>
      <button
        className={
          activeButton === "Blogs" ? "leftBar-button-active" : "leftBar-button"
        }
        onClick={() => {
          navigate("/Blogs");
          setActiveButton("Blogs");
        }}
      >
        <i></i>
        Blogs
      </button>
      <button
        className={
          activeButton === "Shop" ? "leftBar-button-active" : "leftBar-button"
        }
        onClick={() => {
          navigate("/Shop");
          setActiveButton("Shop");
        }}
      >
        <i></i>Shop
      </button>
      <button
        className={
          activeButton === "Checkout"
            ? "leftBar-button-active"
            : "leftBar-button"
        }
        onClick={() => {
          navigate("/Checkout");
          setActiveButton("Checkout");
        }}
      >
        <i></i>
        Checkout
      </button>
    </>
  );

  function renderLeftBar() {
    if (type === "Full") {
      return <div className="leftBar">{buttonsHtml}</div>;
    }

    if (type === "Compact") {
      return (
        <div className="leftBarCompact ">
          <button onClick={() => setType("Floating")}>
            <img src={boxedMenuIcon} width="50px" height="50px"></img>
          </button>
        </div>
      );
    }

    if (type === "Floating") {
      return (
        <div
          className="leftBar leftBarFloating"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setType("Compact");
            }
          }}
        >
          {buttonsHtml}
        </div>
      );
    }
  }

  return renderLeftBar();
}

export default LeftBar;
