import { createServerClient } from '@supabase/ssr';

function getAllCookiesFromRequest(request) {
  const header = request.headers.get("cookie");
  if (!header) return [];
  const pairs = [];
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const name = part.slice(0, eq).trim();
    if (!name) continue;
    pairs.push({ name, value: part.slice(eq + 1).trim() });
  }
  return pairs;
}
function createSupabaseServerClient(request, cookies) {
  const url = "https://wtbideclokhjbpjprraf.supabase.co";
  const key = "sb_publishable_QRddN9Ub1QEzs3XAvXIPdg_EW5RbLag";
  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return getAllCookiesFromRequest(request);
      },
      setAll(cookiesToSet, _responseHeaders) {
        cookiesToSet.forEach(({ name, value, options }) => {
          if (!value) {
            cookies.delete(name, { path: "/", ...options });
          } else {
            cookies.set(name, value, { path: "/", ...options });
          }
        });
      }
    }
  });
}

export { createSupabaseServerClient as c };
