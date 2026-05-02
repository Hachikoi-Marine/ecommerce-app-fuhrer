function getSuperadminEmail() {
  {
    return void 0;
  }
}
function isSuperadminEmail(email) {
  if (!email) {
    return false;
  }
  const allowed = getSuperadminEmail();
  if (!allowed) {
    return false;
  }
  return email.trim().toLowerCase() === allowed;
}

export { getSuperadminEmail as g, isSuperadminEmail as i };
