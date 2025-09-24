const mockAuthAPI = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email.includes('agent') && password === 'password123') {
        resolve({
          success: true,
          user: {
            id: 1,
            email,
            name: 'Agent Smith',
            role: 'agent'
          },
          token: 'mock-agent-token'
        });
      } else if (email.includes('user') && password === 'password123') {
        resolve({
          success: true,
          user: {
            id: 2,
            email,
            name: 'John Doe',
            role: 'user'
          },
          token: 'mock-user-token'
        });
      } else {
        resolve({
          success: false,
          message: 'Invalid credentials'
        });
      }
    }, 500);
  });
};

export default mockAuthAPI;
