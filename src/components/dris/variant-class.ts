import { cva } from "class-variance-authority";
import { baseStyles, colorVariants, roundedVariants, sizeVariants } from "./variants";

const defaultVariant = "lime";

const variantsBase = {
  lime: colorVariants.lime.base,
  aqua: colorVariants.aqua.base,
  lilac: colorVariants.lilac.base,
  cherry: colorVariants.cherry.base,
  amber: colorVariants.amber.base,
  daisy: colorVariants.daisy.base,
  silver: colorVariants.silver.base,
  frosted: colorVariants.frosted.base,
  minimal: colorVariants.minimal.base,
};

export const baseVariants = cva(baseStyles.button, {
  variants: {
    variant: variantsBase,
    size: sizeVariants,
    rounded: roundedVariants,
  },
  defaultVariants: {
    variant: defaultVariant,
    size: "sm",
    rounded: "default",
  },
});

export const inputVariants = cva(baseStyles.button, {
  variants: {
    variant: variantsBase,
    size: sizeVariants,
    rounded: roundedVariants,
  },
  defaultVariants: {
    variant: "minimal",
    size: "sm",
    rounded: "lg",
  },
});

export const cardVariants = cva(baseStyles.button, {
  variants: {
    variant: variantsBase,
    size: {
      default: "p-4",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    rounded: roundedVariants,
  },
  defaultVariants: {
    variant: "minimal",
    size: "md",
    rounded: "lg",
  },
});

export const innerGradientVariants = cva(baseStyles.inner, {
  variants: {
    variant: {
      lime: colorVariants.lime.inner,
      aqua: colorVariants.aqua.inner,
      lilac: colorVariants.lilac.inner,
      cherry: colorVariants.cherry.inner,
      amber: colorVariants.amber.inner,
      daisy: colorVariants.daisy.inner,
      frosted: colorVariants.frosted.inner,
      silver: colorVariants.silver.inner,
    },
    rounded: roundedVariants,
  },
  defaultVariants: {
    variant: defaultVariant,
  },
});

export const shadowTextVariants = cva(baseStyles.shadow, {
  variants: {
    variant: {
      lime: colorVariants.lime.shadow,
      aqua: colorVariants.aqua.shadow,
      lilac: colorVariants.lilac.shadow,
      cherry: colorVariants.cherry.shadow,
      amber: colorVariants.amber.shadow,
      daisy: colorVariants.daisy.shadow,
      frosted: colorVariants.frosted.shadow,
      silver: colorVariants.silver.shadow,
    },
    size: sizeVariants,
  },
  defaultVariants: {
    variant: defaultVariant,
    size: "sm",
  },
});
