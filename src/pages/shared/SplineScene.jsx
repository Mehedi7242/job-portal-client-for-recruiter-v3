import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="w-full h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] relative">
      <Spline
        scene="https://prod.spline.design/PCMVraEFlb0zdjaU/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
