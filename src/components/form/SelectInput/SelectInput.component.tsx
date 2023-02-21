import { useState } from "react";
import LazyLoadingComponent from "../../LazyLoading/LazyLoading.component";

export default function SelectInputComponent(props: {lazyLoading: {renderCondition: boolean, skeleton: JSX.Element}, children: JSX.Element, popUpElement: JSX.Element}) {
    let [isVisible, setVisibility] = useState(false);
    let show = () => setVisibility(true);
    let hide = () => setVisibility(false);

    return (
        <LazyLoadingComponent {...props.lazyLoading}>
            <div>
                <button onClick={isVisible ? hide : show}>
                    {props.children}
                </button>
                {isVisible ? <div onClick={hide}>{props.popUpElement}</div> : <span></span>}
            </div>
        </LazyLoadingComponent>
    )
}