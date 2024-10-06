const People = () => {
  const teachers = [
    {
      name: "Ngoc Anh Pham",
      role: "Teacher",
      profilePicture:
        "https://cdn.vectorstock.com/i/1000v/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg",
    },
    {
      name: "Nguyen Ngoc Son",
      role: "Mentor",
      profilePicture:
        "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    {
      name: "Nguyen Ngoc Son",
      role: "Mentor",
      profilePicture:
        "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    {
      name: "Nguyen Ngoc Son",
      role: "Mentor",
      profilePicture:
        "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
    {
      name: "Nguyen Ngoc Son",
      role: "Mentor",
      profilePicture:
        "https://cdn.vectorstock.com/i/1000v/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    },
  ];
  return (
    <div className="border border-primary/30 w-full bg-white rounded-md p-3 flex flex-col gap-5">
      <div>
        <span className="text-[16px] font-semibold">Teachers</span>
        <div className="flex flex-col">
          {teachers.map((t) => (
            <div className="flex items-center justify-between w-full border-b border-b-black/20 py-2">
              <div className="flex items-center justify-between gap-3">
                <img
                  src={t.profilePicture}
                  className="rounded-full w-[35px] object-cover object-center border border-primary/50 aspect-square"
                />
                <span>
                  {t.name}({t.role})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="text-[16px] font-semibold">Students</span>
        <div className="flex flex-col">
          {teachers.map((t) => (
            <div className="flex items-center justify-between w-full border-b border-b-black/20 py-2">
              <div className="flex items-center justify-between gap-3">
                <img
                  src={t.profilePicture}
                  className="rounded-full w-[35px] object-cover object-center border border-primary/50 aspect-square"
                />
                <span>
                  {t.name}({t.role})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default People;
