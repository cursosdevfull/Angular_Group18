type ROLE_ACCESS = "ADMIN" | "OPERATOR" | "SUPPORT";
interface IROLE_ACCESS {
  role: "ADMIN" | "OPERATOR" | "SUPPORT";
}

const userRole: ROLE_ACCESS = "OPERATOR";

const clientRole: IROLE_ACCESS = {
  role: "SUPPORT",
};
