import image from "@assets/image/image.png";

export function HomePage() {
  return (
    <div className="flex ">
      <div className="">
        <img
          src={image}
          alt="image"
          className="object-cover w-2/5 rounded-2xl "
        />
        <span>Отдых который вы заслужили</span>
      </div>
    </div>
  );
}