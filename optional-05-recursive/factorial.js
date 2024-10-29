function factorial(n) {
  // recursive
  if (n < 0) {
    return null;
  }
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!

export default factorial;
