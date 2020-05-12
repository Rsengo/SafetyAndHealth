const buildFormData = <TData>(model: TData): FormData | undefined => {
    if (!model) {
        return undefined;
    }

    const formData: FormData = new FormData();

    Object.entries(model).forEach(([key, value]: [string, any]) => {
        if (value instanceof File) {
            formData.append(key, value, (value as File)?.name);
            return;
        }

        formData.append(key, value);
    });

    return formData;
};

export default buildFormData;