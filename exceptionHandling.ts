try {
    const file = await Deno.open("./some/file.txt");
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      console.error("the file was not found");
    } else {
      // otherwise re-throw
      throw error;
    }
  }