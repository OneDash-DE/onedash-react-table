export default class AppUtils {
	static timeout = async (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	static getObjectValue = (path: string, obj: any) => {
		if (!path) return undefined;
		let value: any;
		const subPaths = path.split(".");
		let current = obj;
		subPaths.forEach((item, i) => {
			if (i === subPaths.length - 1) {
				value = current?.[item];
				return;
			}
			if (current !== undefined) current = current[item];
		});
		return value;
	};

	static setObjectValue = (path: string, obj: any, value: any) => {
		const subPaths = path.split(".");
		let currentObject = obj;
		subPaths.forEach((item, i) => {
			if (i === subPaths.length - 1) {
				currentObject[item] = value;
				return;
			}
			const regex = /\[(.*?)]/;

			if (regex.test(item)) {
				const index = item.match(regex)?.[1];
				if (String(index).length === 0) return;
				const arrName = item.slice(0, item.length - (String(index).length + 2));

				if (!currentObject[arrName]) currentObject[arrName] = [];
				if (!currentObject[arrName][Number(index)]) currentObject[arrName][Number(index)] = {};
				currentObject = currentObject[arrName][Number(index)];
			} else {
				if (!currentObject[item]) currentObject[item] = {};
				currentObject = currentObject[item];
			}
		});
	};

	public static isObject = (item: any) => {
		return item && typeof item === "object" && !Array.isArray(item);
	};

	/**
	 * Deep merge two objects.
	 * @param target
	 * @param ...sources
	 */
	public static mergeDeep = (target: any, ...sources: any[]): any => {
		if (!sources.length) return target;
		const source = sources.shift();

		if (AppUtils.isObject(target) && AppUtils.isObject(source)) {
			// eslint-disable-next-line no-restricted-syntax
			for (const key in source) {
				if (AppUtils.isObject(source[key])) {
					if (!target[key]) Object.assign(target, { [key]: {} });
					AppUtils.mergeDeep(target[key], source[key]);
				} else {
					Object.assign(target, { [key]: source[key] });
				}
			}
		}

		return AppUtils.mergeDeep(target, ...sources);
	};
}
