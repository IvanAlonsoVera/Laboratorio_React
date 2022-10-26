// combinaciones de varios campos
export function ValidateForm(data) {
	let errors = [];
	if (!data.email.endsWhith("@example.com")) {
		errors.push("only example.com users allowed");
	}
	if (!data.email.toLowerCase().startsWith(data.name.toLowerCase())) {
		errors.push("Email addres must start with the name");
	}
	if (data.name.toLowerCase() === "joe") {
		errors.push("joe go away");
	}

	return errors;
}