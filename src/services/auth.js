// Serviço de autenticação (mock)
export async function login(email, password) {
  // Substitua por chamada real ao backend
  if ((email === 'admin@cond.com' || email === 'admin@condohub.com') && password === 'admin') {
    return { success: true, role: 'admin' };
  }
  if ((email === 'sindico@cond.com' || email === 'sindico@condohub.com') && password === 'sindico') {
    return { success: true, role: 'sindico' };
  }
  if ((email === 'morador@cond.com' || email === 'morador@condohub.com') && password === 'morador') {
    return { success: true, role: 'morador' };
  }
  return { success: false, message: 'Credenciais inválidas' };
}
