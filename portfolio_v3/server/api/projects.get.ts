export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  
  try {
    const data = await $fetch('https://effortless-courage-3e867d4d9f.strapiapp.com/api/projects?populate=*', {
      headers: {
        Authorization: `Bearer ${config.strapiToken}`
      }
    });
    
    return data;
  } catch (err: unknown) {
    const error = err as { statusCode?: number; message?: string; data?: any };
    
    console.error('Strapi API Error:', error);
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Failed to fetch projects'
    });
  }
});