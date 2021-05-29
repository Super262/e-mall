const STORAGE_KEY = 'mall';
export default {
    setItem(key, value, module_name = undefined) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
            return
        }
        let val = this.getStorage();
        val[key] = value;
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    },
    getItem(key, module_name = undefined) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) {
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name = undefined) {
        let val = this.getStorage();
        if (module_name) {
            if (!val[module_name]) {
                return
            }
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}