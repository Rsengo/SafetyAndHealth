export interface UiActionDescription {
    icon: React.ReactNode;

    tooltip?: string;

    text?: string

    onClick: () => void;
}