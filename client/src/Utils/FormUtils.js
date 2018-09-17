export const apiHook = (self) => {
    self.apiHook = (form) => {
        self.formApi = form;

        const unsubscribe = form.subscribe(
            ({ values }) => {
                console.log("ValuesChanged", values);
            },
            { values: true }
        );
        return unsubscribe;
    };
}