export default function dragScroll({ ref, setIsClick }: {
	ref: React.RefObject<HTMLDivElement>;
	setIsClick: (value: boolean) => void;
}) {
  let isDragStart = false;
  let prevPageX = 0;
  let prevScrollLeft = 0;
  let positionDiff = 0;

  const dragStart = (e: MouseEvent) => {
    const element = ref.current!;

    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = element.scrollLeft;
  };

  const dragging = (e: MouseEvent) => {
    if (!isDragStart) {
      return;
    }

    e.preventDefault();

    const element = ref.current!;
    positionDiff = e.pageX - prevPageX;

    element.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = (e: MouseEvent) => {
    isDragStart = false;

    if (prevPageX - e.pageX === 0) {
      setIsClick(true);
    }
  };

  return { dragStart, dragging, dragStop };
}
