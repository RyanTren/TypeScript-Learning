type User = { id: number; name: string; isActive: boolean }

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
  };
  const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
  };
  
  function createUser(user: { id: number; name: string; isActive: boolean }): {
    id: number;
    name: string;
    isActive: boolean;
  } {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
    return user;
  }

  type StringOrNumber = string | number;

  let value:StringOrNumber = 'hello';
  value = 10;

  type Theme = 'light' | 'dark';

  let theme: Theme;
  theme = 'light';
  theme = 'dark';

  function setTheme(t: Theme){
    theme = t;

  }

  setTheme('dark');


  type Employee = {id: number; name: string; department: string}
  type Manager = {id: number; name: string; employees: [Employee]}

  type Staff = Employee | Manager;
  