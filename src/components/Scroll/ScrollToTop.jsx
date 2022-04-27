import { useEffect, useState } from "react";
import './ScrollToTop.scss';

export default function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility(){
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="Scroll">
            <button onClick={scrollToTop} className={isVisible ? "show" : "hide"}>👆</button>
        </div>
    )
}