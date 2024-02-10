declare module "react" {
  export interface FormHTMLAttributes {
    action?: string | ((data: FormData) => Promise<void>) | undefined;
  }
}
