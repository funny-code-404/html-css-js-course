const formItems = {
  title: "Contact Us Today. Let‘s Work Together",
  subTitle:
    "Whether you're a local or national business, big brand or high profile celebrity, we’ve worked with them all – we can help you get where you want to be.",
  buttonLabel: "GET STARTED NOW",
  buttonIcon: "ti-check",
  inputs: [
    {
      type: "text",
      placeholder: "Name",
      name: "name",
      required: true,
    },

    {
      type: "email",
      placeholder: "Email",
      name: "email",
      required: true,
    },

    {
      type: "phone",
      placeholder: "Phone",
      name: "phone",
    },

    {
      type: "text",
      placeholder: "Company Name",
      name: "company",
    },
  ],

  select: [
    {
      firstOption: "Your Budget",
    },

    {
      option: "some option1",
    },

    {
      option: "some option2",
    },

    {
      option: "some option3",
    },

    {
      option: "some option4",
    },
  ],
};

export default formItems;
