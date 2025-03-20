export function ProfileInfo() {
  return (
    <div className="flex flex-row items-center gap-5">
      <img
        className="w-[80px] max-h-[80px] object-cover rounded-full"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        }
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-inter font-medium text-[#555555] text-base">
          Mario Oggero
        </h1>
        <p className="font-inter font-normal text-[#555555]">
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum disputando ea
        </p>
      </div>
    </div>
  );
}
