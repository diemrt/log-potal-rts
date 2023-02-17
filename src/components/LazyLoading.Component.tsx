export default function LazyLoadingComponent(props: {renderCondition: boolean, children: JSX.Element, skeleton: JSX.Element}) {

    return props.renderCondition ? props.children : props.skeleton;
}