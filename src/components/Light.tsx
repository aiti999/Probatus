import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LightType = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propRight?: CSSProperties["right"];
  propTransform?: CSSProperties["transform"];
  propTransformOrigin?: CSSProperties["transformOrigin"];
};

const Light: FunctionComponent<LightType> = ({
  className = "",
  propTop,
  propLeft,
  propRight,
  propTransform,
  propTransformOrigin,
}) => {
  const lightStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      right: propRight,
      transform: propTransform,
      transformOrigin: propTransformOrigin,
    };
  }, [propTop, propLeft, propRight, propTransform, propTransformOrigin]);

  return (
    <div
      className={`!m-[0] absolute top-[-48px] left-[-41px] flex flex-row items-start justify-start z-[1] ${className}`}
      style={lightStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[5px] mix-blend-normal">
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600 hidden" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
        <div className="flex flex-row items-start justify-start gap-1.5">
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
          <div className="h-1.5 w-1.5 relative bg-gray1-600" />
        </div>
      </div>
    </div>
  );
};

export default Light;
