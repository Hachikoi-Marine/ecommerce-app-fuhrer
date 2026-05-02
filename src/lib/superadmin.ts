export function getSuperadminEmail(): string | undefined {
	const raw = import.meta.env.SUPERADMIN_EMAIL;
	if (typeof raw !== 'string' || !raw.trim()) {
		return undefined;
	}
	return raw.trim().toLowerCase();
}

export function isSuperadminEmail(email: string | undefined): boolean {
	if (!email) {
		return false;
	}
	const allowed = getSuperadminEmail();
	if (!allowed) {
		return false;
	}
	return email.trim().toLowerCase() === allowed;
}
