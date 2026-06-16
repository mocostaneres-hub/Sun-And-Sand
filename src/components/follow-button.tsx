type FollowButtonProps = {
  className?: string;
  label?: string;
};

const facebookUrl = "https://www.facebook.com/sunandsandrealtor";

export default function FollowButton({
  className = "inline-flex items-center justify-center rounded-full bg-[#1877f2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f66d6]",
  label = "Follow Us",
}: FollowButtonProps) {
  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Sun and Sand Realtor on Facebook"
      className={className}
    >
      <span aria-hidden="true" className="mr-2 font-bold">
        f
      </span>
      {label}
    </a>
  );
}
