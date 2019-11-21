class Bar {
    constructor(template) {
        this.elements = {};
        if (template.volume) {
            this.elements.volume = template.volume;
        }
        if (template.played) {
            this.elements.played = template.played;
        }
        if (template.loaded) {
            this.elements.loaded = template.loaded;
        }
    }

    /**
     * Update progress
     *
     * @param {String} type - Point out which bar it is
     * @param {Number} percentage
     * @param {String} direction - Point out the direction of this bar, Should be height or width
     */
    set(type, percentage, direction) {
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        if (this.elements[type]) {
            this.elements[type].style[direction] = percentage * 100 + '%';
        }
    }

    get(type, direction) {
        return type ? parseFloat(this.elements[type].style[direction]) / 100 : null;
    }
}

export default Bar;
