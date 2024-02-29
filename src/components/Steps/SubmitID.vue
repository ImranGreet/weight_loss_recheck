<template>
  <section class="w-full prose max-w-none">
    <div class="w-full px-10 py-20">
      <form class="w-full">
        <div>
          <h2>ID Check</h2>
          <p>
            Because you are ordering a prescription-only drug online, we need to
            verify your age and identity. Please confirm your identity by
            uploading your driver's license or passport below.
          </p>
        </div>
        <div class="w-full h-14"></div>

        <div>
            <h3 class="after-content"></h3>
            <input type="file" name="" id="">
        </div>

        <div>
            <p class="after-content">I hereby declare that the information given in this form and in the enclosed documents is true to the best of my knowledge and belief.</p>
            <input type="checkbox" name="" id="">
        </div>

        <div class="w-full h-10"></div>
        <globalForm />
      </form>
    </div>
  </section>
</template>
  
  <script>
export default {
  name: "SubmitId",
};
</script>
  
  <style>
</style>