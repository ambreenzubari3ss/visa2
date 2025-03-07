import NotificationModal from "@/components/modals/NotificationsModal/page";
import NotificationPopover from "../notificationPopover/page";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function SeeMoreModal() {
    const router = useRouter();
    const pathname = usePathname();
    const closeModal = () => {
        router.push(pathname);
      };
    return (
        <div className="p-6">
            <NotificationPopover />
            <NotificationModal closeModal={closeModal} />
        </div>
    );
}
