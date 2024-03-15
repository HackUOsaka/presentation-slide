import { TopSlide } from "@/components/slides/TopSlide";
import { slides } from "@/const/slides";

export default function ShowPage({ params } : { params: { id: string } }) {
  const id = parseInt(params.id);
  const CurrentSlide = slides[id];

  if (CurrentSlide) {
    return <CurrentSlide />;
  } else {
    return <TopSlide />;
  }
}
