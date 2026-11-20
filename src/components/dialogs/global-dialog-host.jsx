import useDialogStore from "@/stores/dialog-store";
import ConfirmDialog from "./confirm-dialog";

const dialogRegistry = {
    confirm: ConfirmDialog,
};

function GlobalDialogHost() {
    const activeDialog = useDialogStore(
        (state) => state.activeDialog
    );

    const closeDialog = useDialogStore(
        (state) => state.closeDialog
    );

    if (!activeDialog) return null;

    const DialogComponent = dialogRegistry[activeDialog.type];

    if (!DialogComponent) return null;

    return (
        <DialogComponent
            open={true}
            onOpenChange={(open) => {
                if (!open) closeDialog();
            }}
            {...activeDialog.props}
        />
    );
}

export default GlobalDialogHost;
